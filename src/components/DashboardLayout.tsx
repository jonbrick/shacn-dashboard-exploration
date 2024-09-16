"use client";

import React, { useState } from "react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DraggableCard } from "./DraggableCard";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState(React.Children.toArray(children));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(
          (item) => React.isValidElement(item) && item.key === active.id
        );
        const newIndex = items.findIndex(
          (item) => React.isValidElement(item) && item.key === over.id
        );
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={items
          .map((item) =>
            React.isValidElement(item) && item.key ? item.key : ""
          )
          .filter(Boolean)}
        strategy={verticalListSortingStrategy}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {items.map((child) => {
            if (React.isValidElement(child) && child.key) {
              return (
                <DraggableCard key={child.key} id={child.key}>
                  {child}
                </DraggableCard>
              );
            }
            return null;
          })}
        </div>
      </SortableContext>
    </DndContext>
  );
}
