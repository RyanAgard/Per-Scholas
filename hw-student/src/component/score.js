
function Score(props){
 const total=[ 
   props.studentlist,
   props.scores1,
   props.scores2,
   props.scores3,
]
 
 
return(<>
  <div className = 'StudentData1' >
  {total[0].map((data) => (
 <div className = 'studentlist1'key={data.id}>
    <div>
      <h1>{data.name}</h1>   
      <p>{data.bio}</p>   
    </div>
   
    </div>
))}               
 <div>
        {total[1].map((data) => (
    <div className = 'studentlist2' key={data.id}>
       <div>
         <h1 > date {data.date}</h1>
       </div>
       <div>
         <h2> score {data.score}</h2>
         </div>  
       </div>
   ))} 
      </div> 
</div > 

   <div className = 'StudentData3'>
  {total[2].map((data) => (
    <div className = 'studentlist3' key={data.id}>
       <div>
         <h1> date {data.date}</h1>
       </div>
       <div>
         <h2>score {data.score}</h2>
         </div> 
       </div>
   ))} 
   
   </div>     
   <div className = 'StudentData4'>
  {total[3].map((data) => (
    <div className = 'studentlist4' key={data.id}>
       <div>
         <h1> date {data.date}</h1>
       </div>   
       <div>
         <h2> score {data.score}</h2>
         </div> 
       </div>
   ))} 
   
   </div>     
</>
    );
}

export default Score;