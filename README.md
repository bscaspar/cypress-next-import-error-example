This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## reproducing Cypress error

- Run `yarn cypress`
- Select `unit.spec.ts` from the Cypress test interface
- ````
  Error: Webpack Compilation Error
    ./utils/someMath.ts
    Module not found: Error: Can't resolve``` error
  ````

- Open `utils/someMath.ts`
- Comment lines 2-5

- Run `yarn cypress` again
- Run `unit.spec.ts` again
- Success!
