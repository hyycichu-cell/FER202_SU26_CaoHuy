//2. Hiển thị thông tin của từng người trong một danh sách gồm 10 người, 
// mỗi người có tên và tuổi ra danh sách ul
import React from 'react';
function ListPerson() {
    const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];
    //3. Tìm người đầu tiên trong mảng people là thanh thiếu niên 
    // (tuổi từ 13 đến 19) và hiển thị thông tin của người đó
    const firstTeenager = people.find(person => person.age >= 13 
        && person.age <= 19);
    //4. Tìm tất cả người trong mảng people là tuổi teen (tuổi từ 10 đến 20)
    const teenagePeople = people.filter(person => person.age >= 10 && person.age <= 20);
    return (
        <>
        <h1>1.List of People</h1>
        <div>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name} - {person.age} years old</li>
                ))}
            </ul>
        </div>
        <h3>2.Find the first person off the people array is teenager</h3>
        <div>
            {firstTeenager ? (
                <p>{firstTeenager.name} - {firstTeenager.age} years old</p>
            ) : (<p>No teenager found.</p>)}
        </div>
        <h3>3.Find all people in the array who are teenagers (age 10-20)</h3>
        <div>
            {teenagePeople.length > 0 ? (
                <ul>
                    {teenagePeople.map((person, index) => (
                        <li key={index}>{person.name} - {person.age} years old</li>
                    ))}
                </ul>
            ) : (
                <p>No teenagers found in the people array.</p>
            )}
        </div>
        </>
    );
}
export default ListPerson;