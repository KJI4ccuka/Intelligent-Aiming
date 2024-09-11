'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { CircleX, KeyRound, LogIn, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.'
  })
})

export const LoginForm = ({ className }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      // send
      window.chrome.webview.postMessage(`api_login?login=${data.username}&pass=${data.password}`);

      // wait
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // read
      const sessionToken = Cookie.get('auth-token');

      if (!sessionToken) {
        throw new Error('Login failed or no session token found');
      }

      console.log('Login successful', sessionToken);
      router.push('/products');

      reset();
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 text-left ${className}`}>
      {error && (
        <div className="bg-red-500 text-white p-2 rounded">
          {error}
        </div>
      )}

      <div className="relative">
        <div className="mt-2 flex items-center">
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Your Username"
            className="block w-full py-3 font-light placeholder-foreground/80 text-white border border-primary rounded-md text-sm px-7 bg-background/0 sm:text-lg sm:py-5 focus:outline-none"
            {...register('username')}
          />
          <i className="absolute right-4 flex items-center text-foreground h-full w-5 sm:w-6">
            <User />
          </i>
        </div>
        {errors.username && (
          <p className="flex text-center items-center gap-1.5 font-light text-red-500 pt-3">
            <CircleX width={20} /> {errors.username.message}
          </p>
        )}
      </div>

      <div className="relative mt-4">
        <div className="mt-2 flex items-center">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your Password"
            autoComplete="current-password"
            className="block w-full py-3 font-light placeholder-foreground/80 text-white border border-primary rounded-md text-sm px-7 bg-background/0 sm:text-lg sm:py-5 focus:outline-none"
            {...register('password')}
          />
          <i className="absolute right-4 flex items-center text-foreground h-full w-5 sm:w-6">
            <KeyRound />
          </i>
        </div>
        {errors.password && (
          <p className="flex text-center items-center gap-1.5 font-light text-red-500 pt-3">
            <CircleX width={20} /> {errors.password.message}
          </p>
        )}
      </div>

      <div className={'flex justify-between items-center gap-3'}>
        {/*<div className={'flex items-center'}>*/}
        {/*  <Button*/}
        {/*    type="reset"*/}
        {/*    variant='glowing'*/}
        {/*    onClick={() => reset()}*/}
        {/*    className="rounded-lg border-white/20 text-foreground"*/}
        {/*  >*/}
        {/*    <RefreshCcw className="h-5 w-5" />*/}
        {/*    <span className={'font-light ml-2'}>Reset form</span>*/}
        {/*  </Button>*/}
        {/*</div>*/}

        <div className={'text-[14px] text-right underline text-foreground'}>
          <a href={'#'}>Forget your password?</a>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          variant='glowing'
          className="rounded-lg w-full px-20 py-5 font-semibold tracking-wide text-lg xs:text-2xl sm:py-7"
          disabled={loading}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            <>
              <LogIn className="xs:block mr-2 h-5 w-5" />
              <span className="text-[16px] font-normal xs:text-lg tracking-wide">Authorize</span>
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
