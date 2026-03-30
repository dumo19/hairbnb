import { create } from "zustand"
import { CategoryName } from "@/constants/categories"

type FilterProps = {
  category: CategoryName | "All",
  services: string[],
  specializations: string[]
}

type FilterStore = {
  filters: FilterProps,
  setFilters: (filters: Partial<FilterProps>) => void
  resetFilters: () => void
}

const defaultFilters: FilterProps = {
  category: "All",
  services: [],
  specializations: []
}

export const useFilterStore = create<FilterStore>((set) => ({
  filters: defaultFilters,
  setFilters: (incoming) =>
    set((state) => ({ filters: { ...state.filters, ...incoming } })),
  resetFilters: () => set({ filters: defaultFilters }),
}))