msg.payload = Math.random() * 30

if(msg.payload <= 10) {
   return [msg, null, null]
} else if(msg.payload <= 20){
   return [null, msg, null]
} else {
   return [null, null, msg]
}

msg.n1 = 1
msg.n2 = 2
msg.n3 = 3
return [msg, msg, msg]
 
