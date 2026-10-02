export enum OperationType {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
}

export function handleFirestoreError(
  error: unknown,
  operation: OperationType,
  collectionName: string
): void {
  console.error(
    `[Firestore Error] Failed to execute ${operation} on ${collectionName}:`,
    error
  );
}
