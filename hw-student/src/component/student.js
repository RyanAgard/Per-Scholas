
import Score from './score';


function Students(){

    const student =[
        {
          name: 'Cait Yomorta',
          id: crypto.randomUUID(),
          bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
          scores: [
            {
              id: crypto.randomUUID(),
              date: '2018-02-08',
              score: 77
            },
            {
              date: '2018-04-22',
              score: 92
            },
            {
              date: '2018-09-15',
              score: 68  
            }
          ]
        },
        {
          name: 'Holly Baird',
          id: crypto.randomUUID(),
          bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
          scores: [
            {
              id: crypto.randomUUID(),
              date: '2018-12-14',
              score: 88
            },
            {
              date: '2019-01-09',
              score: 79
            },
            {
              date: '2019-02-23',
              score: 91
            },
            {
              date: '2019-03-01',
              score: 95
            }
          ]
        },
        {
          name: 'Wes Mungia',
          id: crypto.randomUUID(),
          bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
          scores: [
            {
              id: crypto.randomUUID(),
              date: '2018-10-11',
              score: 62
            },
            {
              date: '2018-11-24',
              score: 74
            },
            {
              date: '2018-12-19',
              score: 85
            }
          ]
        }
      ]

    

    return(
    <div className='homepage'>
      <Score studentlist={student} scores1={student[0].scores} scores2={student[1].scores} scores3 ={student[2].scores}/>

    </div>
    )
}
export default Students