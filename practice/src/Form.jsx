import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit ,reset} = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset()
        })}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
          required
        />
        <input type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
}

export default Form;
