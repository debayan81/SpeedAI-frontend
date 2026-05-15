import React, { useState } from 'react'
import { Sparkles, Eraser } from 'lucide-react'

const RemoveBackground = () => {
    const [file, setFile] = useState(null)
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)

    const handleRemove = async () => {
        if (!file) return
        setLoading(true)
        // API call placeholder
        setTimeout(() => {
            setResult('processed')
            setLoading(false)
        }, 1000)
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Left panel - Form */}
            <div className='bg-white rounded-xl border border-gray-100 p-6'>
                <h2 className='text-xl font-semibold text-slate-800 flex items-center gap-2'>
                    <Sparkles className='w-5 h-5 text-primary' />
                    Background Removal
                </h2>

                <div className='mt-6'>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>
                        Upload image
                    </label>
                    <div className='border border-gray-200 rounded-lg overflow-hidden'>
                        <input
                            type='file'
                            accept='image/*'
                            onChange={(e) => setFile(e.target.files[0])}
                            className='w-full px-4 py-3 text-sm text-gray-500 file:mr-4 file:py-1 file:px-4
                            file:rounded-md file:border file:border-gray-200 file:text-sm file:font-medium
                            file:bg-white file:text-gray-700 hover:file:bg-gray-50 file:cursor-pointer'
                        />
                    </div>
                    <p className='text-xs text-gray-400 mt-2'>
                        Supports JPG, PNG, and other image formats
                    </p>
                </div>

                <button
                    onClick={handleRemove}
                    disabled={loading || !file}
                    className='w-full mt-6 py-3 rounded-lg text-white font-medium flex items-center 
                    justify-center gap-2 cursor-pointer hover:opacity-90 active:scale-[0.98] 
                    transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed'
                    style={{ background: 'linear-gradient(135deg, #F76C1C, #F04A3C)' }}
                >
                    <Eraser className='w-4 h-4' />
                    {loading ? 'Processing...' : 'Remove background'}
                </button>
            </div>

            {/* Right panel - Output */}
            <div className='bg-white rounded-xl border border-gray-100 p-6'>
                <h2 className='text-xl font-semibold text-slate-800 flex items-center gap-2'>
                    <Eraser className='w-5 h-5 text-orange-500' />
                    Processed Image
                </h2>

                <div className='mt-6 flex flex-col items-center justify-center min-h-[300px]'>
                    {result ? (
                        <div className='text-center text-gray-400 text-sm'>
                            <p>Background removed successfully!</p>
                        </div>
                    ) : (
                        <div className='text-center'>
                            <Eraser className='w-12 h-12 text-gray-200 mx-auto mb-3' />
                            <p className='text-sm text-gray-400'>
                                Upload an image and click "Remove Background" to get started
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RemoveBackground
