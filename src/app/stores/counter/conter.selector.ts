import { createSelector } from "@ngrx/store";
import { AppStore } from "../app-store";

export const selectCounterState = (state: AppStore) => state.counter;

export const selectCount = createSelector(
    selectCounterState,
    (state => state.count)
)


