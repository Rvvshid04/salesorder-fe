import React from 'react';

export default function AddressFields({ addresses, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <input
        type="text"
        name="address1"
        value={addresses.address1}
        onChange={onChange}
        placeholder="Address 1"
        className="border px-2 py-1 rounded"
      />
      <input
        type="text"
        name="address2"
        value={addresses.address2}
        onChange={onChange}
        placeholder="Address 2"
        className="border px-2 py-1 rounded"
      />
      <input
        type="text"
        name="address3"
        value={addresses.address3}
        onChange={onChange}
        placeholder="Address 3"
        className="border px-2 py-1 rounded"
      />
      <input
        type="text"
        name="suburb"
        value={addresses.suburb}
        onChange={onChange}
        placeholder="Suburb"
        className="border px-2 py-1 rounded"
      />
      <input
        type="text"
        name="state"
        value={addresses.state}
        onChange={onChange}
        placeholder="State"
        className="border px-2 py-1 rounded"
      />
      <input
        type="text"
        name="postcode"
        value={addresses.postcode}
        onChange={onChange}
        placeholder="Postcode"
        className="border px-2 py-1 rounded"
      />
    </div>
  );
}
