import React from 'react';
import { useRouter } from 'next/router';
import UploadForm from '../components/UploadForm';
import requests from '../util/requests';

export default function Upload() {
    const router = useRouter();

    const onSubmit = (formData) =>
        requests
            .post('/api/create-upload', {
                body: JSON.stringify(formData),
            })
            .then(() => {
                router.push('/');
            });

    return (
        <div className="flex justify-center min-h-screen">
            <UploadForm onSubmit={onSubmit} />
        </div>
    );
}
