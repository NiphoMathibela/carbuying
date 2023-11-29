import React from 'react'

const SellCar = () => {
  return (
    <div>
        <div className=' bg-amber-400 w-full h-2/6'>
            Selling my car
        </div>

        {/* Selling  car form */}
        <div>
            <div>
                <label htmlFor="makeAndModel">Make and model</label>
                <input type="text" id='makeAndModel' name='makeAndModel' />
            </div>

            <div>
                <label htmlFor="makeAndModel">Make and model</label>
                <input type="text" id='makeAndModel' name='makeAndModel' className='bg-amber-400 border' />
            </div>

            <div>
                <p>Make and model</p>
                <input type="text" id='makeAndModel' name='makeAndModel' className='bg-amber-400'/>
            </div>

            <div>
                <label htmlFor="makeAndModel">Make and model</label>
                <input type="text" id='makeAndModel' name='makeAndModel' />
            </div>
        </div>
    </div>
  )
}

export default SellCar