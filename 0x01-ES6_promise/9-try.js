export default function guardrail(mathFunction) {
  const que = [];

  try {
    que.push(mathFunction());
  } catch (error) {
    que.push(String(error));
  } finally {
    que.push('Guardrail was processed');
  }

  return que;
}
