export const validateEmail = (email)=>{
   return String(email).match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
};

export const validateLength=(text,min,max)=>{
    if(text.length>=min && text.length <=max){
        return true;
    }
    return false;
}