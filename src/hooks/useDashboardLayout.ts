import React, { useState, useCallback } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { UniqueIdentifier } from "@dnd-kit/core";

export function useDashboardLayout(initialItems: React.ReactNode[]) {
  const [items, setItems] = useState(initialItems);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const handleDragStart = useCallback(
    (event: { active: { id: UniqueIdentifier } }) => {
      setActiveId(event.active.id);
    },
    []
  );

  const handleDragEnd = useCallback(
    (event: {
      active: { id: UniqueIdentifier };
      over: { id: UniqueIdentifier } | null;
    }) => {
      const { active, over } = event;
      setActiveId(null);

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
    },
    []
  );

  return { items, activeId, handleDragStart, handleDragEnd };
}
