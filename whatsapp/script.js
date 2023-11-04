function messageadd()
{
    var a= document.getElementById("chatinput").value;
    document.getElementById("shameekchat").innerHTML+='<p class="sendmessage">' + a +'</p>';
    document.getElementById("chatinput").value="";
}