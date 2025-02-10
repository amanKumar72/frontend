import { useState } from "react"
import {  } from "react-router-dom"

function AddListing() {
  const [details, setDetails] = useState({ name: '', isbnNumber: '', price: '',img:'' })
 function handleSubmit(e){
    e.preventDefault()
    console.log(details)

  }
  return (
    <div>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="logo"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Enter the details of your book
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  required
                  autoComplete="name"
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="isbnNumber"
                className="block text-sm/6 font-medium text-gray-900"
              >
                ISBN Number
              </label>
              <div className="mt-2">
                <input
                  id="isbnNumber"
                  name="isbnNumber"
                  type="text"
                  required
                  placeholder="Enter ISBN number"
                  autoComplete="isbnNumber"
                  onChange={(e) => setDetails({ ...details, isbnNumber: e.target.value })}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="price"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  price
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="price"
                  name="price"
                  placeholder="Enter the price"
                  type="number"
                  required
                  autoComplete="price"
                  onChange={(e) =>
                    setDetails({ ...details, price: e.target.value })
                  }
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="img"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  image
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="img"
                  name="img"
                  placeholder="select the image"
                  type="file"
                  required
                  autoComplete="img"
                  onChange={(e) =>
                    setDetails({ ...details, img: e.target.value })
                  }
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!details.name || !details.isbnNumber || !details.price||details.file}
                onClick={(e) => handleSubmit(e)}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddListing