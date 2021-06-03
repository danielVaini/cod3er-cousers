export default function WithProperty(props){
  const status = props.nota >= 7 ? 'Pass' : 'reproved';
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>Nome: <strong>{props.aluno}</strong> </h3>
      <h3>Nota: {props.nota}</h3>
      <h4>Status: {status}</h4>
    </div>
  );
}