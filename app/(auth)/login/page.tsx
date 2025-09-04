"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SectionContainer, ViewContainer } from "@/components/layouts";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import Link from "next/link";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <SectionContainer>
      <ViewContainer className="w-[min(calc(100vw),var(--container-lg))]">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Login to your account</CardTitle>
            <CardDescription className="text-center">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="a@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>This is your email</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link className="text-sm" href="/">
                          Forgot your password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input type="password" placeholder="" {...field} />
                      </FormControl>
                      <FormDescription>This is your password</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
                <p className="text-sm text-center">
                  <span>Don&apos;t have an account? </span>
                  <Link className="underline" href="/">Sign up</Link>
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </ViewContainer>
    </SectionContainer>
  );
}
