import { Envelope, Lock } from 'phosphor-react';

import { Heading } from './components/Heading';
import { TextInput_ } from './components/TextInput';
import { Text } from './components/Text';
import { Logo } from './Logo';

import './styles/global.css';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput_.Root>
            <TextInput_.Icon>
              <Envelope />
            </TextInput_.Icon>

            <TextInput_.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput_.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput_.Root>
            <TextInput_.Icon>
              <Lock />
            </TextInput_.Icon>

            <TextInput_.Input type="password" id="password" placeholder="********" />
          </TextInput_.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4 ">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}