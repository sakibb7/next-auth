import CardWrapper from "@/components/ui/auth/card-wrapper";

function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/login"
      showShocial
    >
      Login Form!
    </CardWrapper>
  );
}

export default LoginForm;
