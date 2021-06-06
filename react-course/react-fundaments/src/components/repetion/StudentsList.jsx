import students from '../../data/students'

export default props => {

    
    const studentsJsx = students.map(student => {
      return(

        <li key={student.id} >{student.id}) {student.nome} - {student.nota}</li>
        );
      
  })
  return (
    <div>
      <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
        {studentsJsx}
   
      </ul>
    </div>

  );
}