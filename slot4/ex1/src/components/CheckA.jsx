export default function CheckA () {
//Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.
  const isAnyTeenager = people.some(person => person.age >= 10 && person.age <= 20);
  return (<div>{isAnyTeenager ? 'At least one person is a teenager.' : 'No one is a teenager.'}</div>);
}