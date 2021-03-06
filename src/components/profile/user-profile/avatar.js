export const avatar = fullname => { 
    let { name } = fullname.user;
    let fullName = name.split(' ');
    let initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);

    return initials.toUpperCase();
}