import { faker } from '@faker-js/faker'
import React, { useState,useEffect } from 'react'

function Suggestions() {

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      worksAt: faker.company.name(),
    }));
    setSuggestions(suggestions);
  }, []);
  
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See all</button>
      </div>

      {
        suggestions.map(suggestion => (
          <div key={suggestion.userId} className="flex items-center justify-between mt-3">
              <img className='w-10 h-10 rounded-full border p-1' src={suggestion.avatar} alt="" />
              <div className='flex-1 ml-4'>
                  <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
                  <h3 className='text-xs text-gray-400'>Works at {suggestion.worksAt}</h3>
              </div>
              <button className='text-blue-400 text-xs font-bold'>Follow</button>
          </div>
        ))}
    </div>
  )
}

export default Suggestions