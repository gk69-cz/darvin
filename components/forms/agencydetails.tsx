import React, { useState } from 'react'
import { Agency } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { AlertDialog } from '../ui/alert-dialog'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'


type Props = {
    data?: Partial<Agency>
}

const AgencyDetails = ({ data }: Props) => {
    const { toast } = useToast()
    const router = useRouter()
    const [delatingAgency,setDelatingAgency] = useState(false)
  return (
    <AlertDialog>
        <Card>
            <CardHeader>
                <CardTitle>
                    Agency Information
                </CardTitle>
                <CardDescription>
                    Lets create an agency for your buisness . you can edit your agency settings.
                    later form the agency settings tab.
                </CardDescription>
            </CardHeader>
        </Card>
    </AlertDialog>
  )
}

export default AgencyDetails