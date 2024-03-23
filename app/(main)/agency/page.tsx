import AgencyDetails from '@/components/forms/agencydetails'
import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs'
import { Plan } from '@prisma/client'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async({searchParams}:{searchParams:{plan:Plan; state:string; code:string}}) => {
  const authUser = await currentUser()
  if(!authUser) return redirect('/sign-up')

  const agencyId = await verifyAndAcceptInvitation();
  console.log(agencyId)

  //get user details
  const user = await getAuthUserDetails()
  if(agencyId){
    if(user?.role === 'SUBACCOUNT_GUEST' || user?.role === 'SUBACCOUNT_USER'){
      return redirect('/subaccount')
    }else if(user?.role === 'AGENCY_ADMIN' || user?.role === 'AGENCY_OWNER' ){
      if(searchParams.plan){
        return redirect(`/agency/${agencyId}/billing?plan=${searchParams.plan}`)

      }
      if(searchParams.state){
        const statePath = searchParams.state.split('__')[0];
        const stateAgencyId = searchParams.state.split('___')[0];
        if(!stateAgencyId) return <div>not authorised</div>
        return redirect(`/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}}`)
      }else return redirect(`/agency/${agencyId}`)
    }else{
      return <div>not authorised</div>
    }
  }
  
  return(
    <div className='flex justify-center item-center mt-4'>
      <div className='max-w[850] border-[1px] p-4 rounded-xl'>
        <h1 className='text-4xl'>Create an agency</h1>
        <AgencyDetails data={{ companyEmail: authUser?.emailAddresses[0].emailAddress}}/>
      </div>
    </div>

  )
}


export default Page