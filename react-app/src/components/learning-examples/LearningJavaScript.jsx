const person = {
    name: 'Irfan Zulkefly',
    address: {
        line1: 'Amazing Height',
        city: 'Klang',
        country: 'MY',
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile) 

        );
    }
}

export default function LearningJavascript(){
    return(
        <div>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.address.city}</div>
        <div>{person.address.country}</div>
        <div>{person.printProfile()}</div>
        </div>
    )
}