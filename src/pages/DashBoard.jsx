import React from 'react'
import { Sparkles } from 'lucide-react'
import { dummyCreationData } from '../assets/assets'

const DashBoard = () => {
    return (
        <div>
            {/* Stats cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-3xl'>
                {/* Total Creations */}
                <div className='bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-gray-500'>Total Creations</p>
                        <p className='text-3xl font-bold text-slate-800 mt-1'>
                            {dummyCreationData.length}
                        </p>
                    </div>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 
                    flex items-center justify-center'>
                        <Sparkles className='w-6 h-6 text-white' />
                    </div>
                </div>

                {/* Plan Status */}
                <div className='bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-gray-500'>Plan Status</p>
                        <p className='text-2xl font-bold text-slate-800 mt-1'>Premium</p>
                    </div>
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 
                    flex items-center justify-center'>
                        <Sparkles className='w-6 h-6 text-white' />
                    </div>
                </div>
            </div>

            {/* Recent Creations */}
            <div>
                <h2 className='text-xl font-semibold text-slate-800 mb-4'>Recent Creations</h2>
                <div className='space-y-3 max-w-3xl'>
                    {dummyCreationData.map((creation) => (
                        <div key={creation.id} className='bg-white rounded-xl border border-gray-100 
                        px-6 py-4 flex items-center justify-between hover:shadow-sm transition-shadow'>
                            <div>
                                <p className='font-medium text-slate-700 text-sm'>
                                    {creation.prompt.length > 60
                                        ? creation.prompt.substring(0, 60) + '...'
                                        : creation.prompt}
                                </p>
                                <p className='text-xs text-gray-400 mt-1'>
                                    {creation.type} - {new Date(creation.created_at).toLocaleDateString('en-US', {
                                        month: 'numeric',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <span className='text-xs font-medium px-4 py-1.5 rounded-full border border-primary/20 
                            text-primary bg-primary/5'>
                                {creation.type}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DashBoard