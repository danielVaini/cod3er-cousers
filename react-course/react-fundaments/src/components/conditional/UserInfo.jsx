import If, { Else } from "./If";

export default props => {
  const usuario = props.usuario || {}
  return(
    <div>
      {/* <If test={usuario && usuario.name}>
        Seja Bem vindo <strong>{usuario.name}</strong>

      </If> */}
      <If test={usuario || usuario.name}>
        Seja Bem vindo <strong>Amigão</strong>
        <Else>

          Seja Bem vindo <strong>Else</strong>
        </Else>
      </If>
    </div>
  );
}