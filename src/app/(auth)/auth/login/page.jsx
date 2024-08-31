'use client'

import {useRouter} from "next/navigation";
import LoginContainer from "@/components/shared/login/login-container";
import Image from "next/image";
import BgcParticles from "@/components/shared/bgc-particles";
import {cn} from "@/lib/utils";
import { LoginForm } from '@/components/shared/login/login-form';

export default function LoginPage({ className }) {

  const router = useRouter()

  // useEffect(() => {
  //   // const token = Cookie.get('auth-token')
  //
  //   if (token) {
  //     router.push('/products')
  //   }
  //
  // }, [router])

  return (
    <div className={cn('relative pb-5', className)}>
      <canvas
        className="absolute w-full -z-50 bg-background [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-50"
      >
      </canvas>

      <div className=" px-4 pt-10 mx-auto max-w-2xl ">
        <LoginContainer
          form={<LoginForm />}
        />
      </div>
      <img
        alt="21"
        className="absolute bottom-0 left-0 right-0 -z-10 opacity-25"
        src="/images/green-glow.png"
      />
      <BgcParticles />
    </div>
  )
}
