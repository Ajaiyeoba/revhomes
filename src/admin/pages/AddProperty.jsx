import { useState } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { database  } from 'firebase/database';
import { addDoc, collection } from 'firebase/firestore';

function AddProperty() {

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [listType, setListType] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [state, setState] = useState('');
  const [price, setPrice] = useState('')
  const [currency, setCurrency] = useState('')
  const [negotiable, setNegotiable] = useState('');
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('');
  const [size, setSize] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [agentName, setAgentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');


  const value = collection(database, "revHome");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(value, {
        title, type, listType, address,
        city, zipCode, state, price,
        currency, negotiable, bedroom, bathroom,
        size, yearBuilt, status, description,
        images, agentName, phone, email, date,
      });
      setTitle(''),
        setType(''),
        setListType(''),
        setAddress(''),
        setCity(''),
        setZipCode(''),
        setState(''),
        setPrice(''),
        setCurrency(''),
        setNegotiable(''),
        setBedroom(''),
        setBathroom('')
      setSize(''),
        setYearBuilt(''),
        setStatus('');
      setDescription('');
      setImages('');
      setAgentName(''),
        setPhone(''),
        setEmail(''),
        setDate('',)
    } catch (error) {
      console.log(error);

    }
  }
  return (

    <div>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-4xl  font-semibold text-gray-900">Add Property </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Add the necessary information about the property.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                  Property Title
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Property Title"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="type" className="block text-sm/6 font-medium text-gray-900">
                  Property Type
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="type"
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    autoComplete="type"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>--Type--</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Commercial</option>
                    <option>Land </option>
                  </select>
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="listType" className="block text-sm/6 font-medium text-gray-900">
                  Listing Type
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="listType"
                    name="listType"
                    value={listType}
                    onChange={(e) => (setListType.target.value)}
                    autoComplete="lType"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>Sales</option>
                    <option>Rent</option>
                  </select>
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Location Details</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="address" className="block text-sm/6 font-medium text-gray-900">
                  Address
                </label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="address"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    autoComplete="city"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="zipCode" className="block text-sm/6 font-medium text-gray-900">
                  Zip/Postal Code
                </label>
                <div className="mt-2">
                  <input
                    id="zipCode"
                    name="zipCode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    type="number"
                    autoComplete="zipCode"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="state" className="block text-sm/6 font-medium text-gray-900">
                  State
                </label>
                <div className="mt-2">
                  <input
                    id="state"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    type="text"
                    autoComplete="state"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Pricing  Information</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                  Price
                </label>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    autoComplete="price"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                  Currency
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="listType"
                    name="listType"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    autoComplete="lType"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>Naira</option>
                    <option>Dollar </option>
                    <option>Pounds </option>
                  </select>
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900">Negotiable</legend>
                <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                <div className="mt-6  space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      defaultChecked
                      id="negotiable-yes"
                      name="negitiable"
                      value={negotiable}
                      onChange={(e) => setNegotiable(e.target.value)}
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                    />
                    <label htmlFor="yes" className="block text-sm/6 font-medium text-gray-900">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="negotiable-no"
                      name="negotiable"
                      type="radio"
                      className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                    />
                    <label htmlFor="no" className="block text-sm/6 font-medium text-gray-900">
                      No
                    </label>
                  </div>

                </div>
              </fieldset>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Property Features </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="bedroom" className="block text-sm/6 font-medium text-gray-900">
                  Number of Bedrooms
                </label>
                <div className="mt-2">
                  <input
                    id="bedroom"
                    name="bedroom"
                    value={bedroom}
                    onChange={(e) => setBedroom(e.target.value)}
                    type="number"
                    autoComplete="bedroom"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="bathroom" className="block text-sm/6 font-medium text-gray-900">
                  Number of Bathrooms
                </label>
                <div className="mt-2">
                  <input
                    id="bathroom"
                    name="bathroom"
                    type="number"
                    value={bathroom}
                    onChange={(e) => setBathroom(e.target.value)}
                    autoComplete="bathroom"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="size" className="block text-sm/6 font-medium text-gray-900">
                  Property Size
                </label>
                <div className="mt-2">
                  <input
                    id="size"
                    name="size"
                    type="number"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    autoComplete="size"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Property Details </h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:colo-span-3">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                  Year Built
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

                    <input
                      id="yearBuil"
                      name="yearBuil"
                      type="date"
                      value={yearBuilt}
                      onChange={(e) => setYearBuilt(e.target.value)}
                      placeholder="Property yearBuil"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                  Property Status
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="type"
                    name="type"
                    value={status}
                    onChange={(e) => setState(e.target.value)}
                    autoComplete="type"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>Available</option>
                    <option>Under Offer</option>
                    <option>Sold</option>
                  </select>
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">

                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Property Title"
                      className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                  Upload Images
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <ArrowDownIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload Images</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          value={images}
                          onChange={(e) => setImages(e.target.value)}
                          className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">PNG or JPG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">Contact Information</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="agent-name" className="block text-sm/6 font-medium text-gray-900">
                  Agent/Owner Name
                </label>
                <div className="mt-2">
                  <input
                    id="agent-name"
                    name="agent-name"
                    type="text"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    autoComplete="agent-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="contact" className="block text-sm/6 font-medium text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="contact"
                    name="contact"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    autoComplete="contact"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="agent-email" className="block text-sm/6 font-medium text-gray-900">
                  Agent Email
                </label>
                <div className="mt-2">
                  <input
                    id="agent-email"
                    name="agent-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="agent-email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="date" className="block text-sm/6 font-medium text-gray-900">
                  Date
                </label>
                <div className="mt-2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    autoComplete="date"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button"
            className="text-sm/6 font-semibold text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProperty