export default function createIteratorObject(report) {
  function* getEmployees() {
    for (const department of Object.values(report.allEmployees)) {
      yield* department;
    }
  }

  return getEmployees();
}
