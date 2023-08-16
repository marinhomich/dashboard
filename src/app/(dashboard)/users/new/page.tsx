import CreateUserForm from "@/components/forms/create-user-form";

export default function CreateUser() {
  return (
    <>
      <h1 className="font-cal text-3xl font-bold dark:text-white">
        Novo Usuário
      </h1>
      <CreateUserForm />
    </>
  );
}
