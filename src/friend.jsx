export default function Friend({friendObj}) {
  // console.log(friend)
  const { id, email,name } = friendObj
  return (
    <div className="friend-style">
      <p>ID:{id }</p >
      <p>Name:{email }</p >
      <p>Email:{ name}</p>
     
    </div>
  )
}

 
// {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
// [[Prototype]]
// : 
// Object
