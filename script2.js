

export function firstFunction(student, nameList){
        return {
            ...student,
            contatti: nameList
        };
}

export let showContacts = ({contatti})=> {
    return `Questi sono i miei contatti ${contatti.join(',')}`;
}



