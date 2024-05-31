"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/H2";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/Container";

const formSchema = z.object({
  method: z.enum(["email", "phone", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function MethodPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      method: "none",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // comunicar con bff
  }

  return (
    <Container>
      <H2>Actualizar contraseña</H2>
      <span>
        Selecciona el método de seguridad para crear o recuperar tu nueva clave
      </span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={""}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="email" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Enviar a mi correo electrónico registrado.
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="phone" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Enviar mi teléfono registrado.
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Continuar</Button>
        </form>
      </Form>
    </Container>
  );
}
