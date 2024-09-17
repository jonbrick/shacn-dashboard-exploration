"use client";

import React, { useState, useCallback, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DraggableCard } from "./DraggableCard";
import { DashboardGrid } from "./DashboardGrid";

interface DashboardItem {
  id: string;
  title: string;
  component: React.ReactNode;
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<DashboardItem[]>(
    React.Children.toArray(children).map((child, index) => ({
      id: `item-${index}`,
      title:
        React.isValidElement(child) && child.props.title
          ? child.props.title
          : `Item ${index + 1}`,
      component: child,
    }))
  );

  useEffect(() => {
    console.log(
      "%c📊 Initial Dashboard Layout:",
      "color: #4CAF50; font-weight: bold; font-size: 16px;"
    );
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title} (ID: ${item.id})`);
    });
  }, []);

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const { active } = event;
      const draggedItem = items.find((item) => item.id === active.id);
      if (draggedItem) {
        const currentPosition = items.indexOf(draggedItem) + 1;
        console.log(
          `%c🔼 Picked up: ${draggedItem.title}`,
          "color: #2196F3; font-weight: bold;"
        );
        console.log(`   Current position: ${currentPosition}`);
      }
    },
    [items]
  );

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setItems((currentItems) => {
        const oldIndex = currentItems.findIndex(
          (item) => item.id === active.id
        );
        const newIndex = currentItems.findIndex((item) => item.id === over.id);

        const movedItem = currentItems[oldIndex];
        console.log(
          `%c🔽 Put down: ${movedItem.title}`,
          "color: #FF9800; font-weight: bold;"
        );
        console.log(`   New position: ${newIndex + 1}`);

        return arrayMove(currentItems, oldIndex, newIndex);
      });
    }
  }, []);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <DashboardGrid>
          {items.map((item) => (
            <DraggableCard key={item.id} id={item.id}>
              {item.component}
            </DraggableCard>
          ))}
        </DashboardGrid>
      </SortableContext>
    </DndContext>
  );
}
