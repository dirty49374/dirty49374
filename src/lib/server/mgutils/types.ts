export type ModelType<T> = T extends { findOne: (...args: any[]) => any }
  ? ReturnType<T["findOne"]>
  : never;
  
