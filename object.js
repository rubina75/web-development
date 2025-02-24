 const football = {
    teamname:'manchester united',
    player:'cristiano ronaldo',
    stadium:'old trafford',
    profession:'football player',
    title:'The Best FIFA Mens Player',
    phonenumber:'555-001',
    address:{
        street:'123 main street',
        city:'manchester',
        state:'england'
    }
 };
//  in order to add keyvalue
football['age']='25'
football.linkedinid='something'
 console.log(football)
//  for specific value we use the dot notation
    console.log(football.address.state)
    