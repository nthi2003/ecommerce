import React from 'react'

const NavBarComponent = () => {
  const onChange = () => { }
  const renderContent = (type, options, count) => {
    switch (type) {
      case 'text':
        return options.map((option, index) => (
          <h1 className='w-10'  key={index}>{option}</h1>
        ));
      case 'checkbox':
        return (
          <>
            <div className="flex mb-4 flex-col w-10" onChange={onChange}>
              {options.map((option) => {
                return (
                  <div className='flex'>
                    <input id="default-checkbox" type="checkbox" value={option.value} className="" />
                    <label htmlFor="default-checkbox" className="">{option.label}</label>
                  </div>



                )
              })}
            </div>

          </>
        );
      case 'star':
        return options.map((option, index) => (
         <div className='flex'>
           <div key={index} value={option.value} className='flex w-[200px]'>
            {[...Array(option.star)].map(( i) => (
              <div className='flex'>
                <svg
                key={i}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              
              </div>

            ))}
           
          </div>
         <div className='w-[200px]'>
         <span className=''>{`tu ${option.star} sao`}</span>
         </div>
         </div>
        ));
      case 'price' :
        return options.map((option) => {
          return (
              <div>{option}</div>
          )
    })
      default:
        return null;
    }
  };

  return (
    <div className='w-[200px] bg-white px-2'>
      <h4 className='w-10'>Label</h4>
      {renderContent('text', ['Tu lanh', 'TV', 'MAYGIAT'])}
      {renderContent('checkbox', [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' }
      ])}
      {renderContent('star', [
        { value: [1, 2, 3], star: 3 },
        { value: [1, 2, 3, 4], star: 4 },
        { value: [1, 2, 3, 4, 5], star: 5 }
      ])}
      {renderContent('price', ['duoi 40.000', 'tren 50.000'])}
    </div>
  );
};

export default NavBarComponent;