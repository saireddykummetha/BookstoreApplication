 const backendDomin="https://bookstoreapplication-1-9p8l.onrender.com"

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
