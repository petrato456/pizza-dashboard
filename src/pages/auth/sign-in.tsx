import { Helmet } from "react-helmet-async";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const signinSchema = z.object({
  email: z.string().email(),
});

type SigninFormData = z.infer<typeof signinSchema>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm<SigninFormData>();
  async function handleSignin(data: SigninFormData) {
    try {
      console.log(data);
      toast.success("Enviamos um lin de autenticação para o seu e-mail.", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignin(data),
        },
      });
    } catch (error) {
      toast.error("Credenciais inválidas");
    }
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignin)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitted}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
