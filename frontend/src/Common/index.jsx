 const backendDomin="https://bookstoreapplication-2.onrender.com"

const SummaryApi={
   login:{
    url : `${backendDomin}/login`,
        method : "post"
   },
   signup:{
      url:`${backendDomin}/signup`,
      method:"post"
   },
   uploadProduct:{
      url:`${backendDomin}/uploadBooks`,
      method:"post"
   },
   
   product:{
      url:`${backendDomin}/AllBooks`,
      method:"get"
   
   }
   
}

export default SummaryApi
