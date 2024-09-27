import React from "react";
import { useForm } from "react-hook-form";

function CustomForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (formData) => console.log(formData);
  
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-gray-900 p-4">
      <div className="mx-auto max-w-[80%] mt-10 lg:max-w-[1140px] grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Your Name</p>
          <input
            type="text"
            placeholder="Your Name"
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-red-500 mt-1 text-xs">Name is required</span>}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Father Name</p>
          <input
            type="text"
            placeholder="Father Name"
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="parentName"
            {...register("parentName", { required: true })}
          />
          {errors.parentName && <span className="text-red-500 mt-1 text-xs">Father name is required</span>}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Contact Email</p>
          <input
            type="email"
            placeholder="Contact Email"
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="contactEmail"
            {...register("contactEmail", { required: true })}
          />
          {errors.contactEmail && <span className="text-red-500 mt-1 text-xs">Email is required</span>}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Mobile Number</p>
          <input
            type="text"
            placeholder="Mobile Number"
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="mobileNumber"
            {...register("mobileNumber", { required: true })}
          />
          {errors.mobileNumber && <span className="text-red-500 mt-1 text-xs">Mobile number is required</span>}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">ID Number</p>
          <input
            type="number"
            placeholder="ID Number"
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="idNumber"
            {...register("idNumber", { required: true })}
          />
          {errors.idNumber && <span className="text-red-500 mt-1 text-xs">ID number is required</span>}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Birth Date</p>
          <input
            type="date"
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="birthDate"
            {...register("birthDate", { required: true })}
          />
          {errors.birthDate && <span className="text-red-500 mt-1 text-xs">Birth date is required</span>}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Select Gender</p>
          <select
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="genderSelection"
            {...register("genderSelection", { required: true })}
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.genderSelection && <span className="text-red-500 mt-1 text-xs">Gender selection is required</span>}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Do you have a Laptop?</p>
          <select
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="laptopOwnership"
            {...register("laptopOwnership", { required: true })}
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.laptopOwnership && <span className="text-red-500 mt-1 text-xs">This question is required</span>}
        </label>
      </div>

      <div className="mx-auto max-w-[80%] mt-8 lg:max-w-[1140px] grid gap-4">
        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Your Address</p>
          <input
            type="text"
            placeholder="Your Address"
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="userAddress"
            {...register("userAddress", { required: true })}
          />
          {errors.userAddress && <span className="text-red-500 mt-1 text-xs">Address is required</span>}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm"> Qualification</p>
          <select
            className="input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="highestQualification"
            {...register("highestQualification", { required: true })}
          >
            <option value="" disabled>
              Choose an option
            </option>
            <option value="matric">Matriculation</option>
            <option value="intermediate">Intermediate</option>
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
          </select>
          {errors.highestQualification && (
            <span className="text-red-500 mt-1 text-xs">Qualification selection is required</span>
          )}
        </label>

        <label className="form-control w-full">
          <p className="text-gray-200 mb-1 text-sm">Upload Profile Picture</p>
          <input
            type="file"
            className="file-input w-full p-2 rounded bg-gray-800 text-gray-300 border border-gray-600 text-sm"
            name="profilePic"
            {...register("profilePic", { required: true })}
          />
          {errors.profilePic && <span className="text-red-500 mt-1 text-xs">Profile picture is required</span>}
          <ul className="text-gray-400 text-xs list-disc mt-2 ml-5">
            <li>Background: white or blue</li>
            <li>Allowed formats: jpg, jpeg, png</li>
            <li>Recent passport size photo preferred</li>
            <li>Face should be clearly visible without glasses</li>
          </ul>
        </label>

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all text-sm"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
}

export default CustomForm;
