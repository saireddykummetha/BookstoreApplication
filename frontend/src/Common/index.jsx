 const backendDomin="https://bookstoreapplication-cpeb.onrender.com"

const SummaryApi={
   login:{
    url : `${backendDomin}/login`,
        method : "post"
   },
   signup:{
      url:`${backendDomin}/signup`,
      method:"post"
   },
   uploadBooks:{
      url:`${backendDomin}/uploadBooks`,
      method:"post"
   },
   
   AllBooks:{
      url:`${backendDomin}/AllBooks`,
      method:"get"
   
   }
   
}

export default SummaryApi
