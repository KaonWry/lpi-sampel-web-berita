<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ArticleController extends Controller
{
    public function getArticle(): JsonResponse
    {
        $content = file(storage_path('app/text.txt'), FILE_IGNORE_NEW_LINES);
        $baseUrl = config('app.url');

        return response()->json([
            'title' => 'Judul Berita yang Agak Panjang Dikit: GPP Ini Contoh Aja',
            'hero'  => $baseUrl . '/assets/article/hero.jpeg',
            'body'  => [
                ['type' => 'paragraph', 'content' => $content[0]],
                ['type' => 'image',     'content' => $baseUrl . '/assets/article/img1.jpg'],
                ['type' => 'paragraph', 'content' => $content[1]],
                ['type' => 'image',     'content' => $baseUrl . '/assets/article/img2.jpg'],
                ['type' => 'paragraph', 'content' => $content[2]],
                ['type' => 'paragraph', 'content' => $content[3]],
                ['type' => 'image',     'content' => $baseUrl . '/assets/article/img3.jpg'],
                ['type' => 'paragraph', 'content' => $content[4]],
                ['type' => 'paragraph', 'content' => $content[5]],
                ['type' => 'image',     'content' => $baseUrl . '/assets/article/img4.jpg'],
                ['type' => 'paragraph', 'content' => $content[6]],
                ['type' => 'paragraph', 'content' => $content[7]],
            ],
        ]);
    }

    public function getRecommendation(): JsonResponse
    {
        $baseUrl = config('app.url');

        return response()->json([
            ['title' => 'Contoh Judul Berita 1', 'thumbnail' => $baseUrl . '/assets/recommendation/thumb1.jpg'],
            ['title' => 'Contoh Judul Berita 2', 'thumbnail' => $baseUrl . '/assets/recommendation/thumb2.jpg'],
            ['title' => 'Contoh Judul Berita 3', 'thumbnail' => $baseUrl . '/assets/recommendation/thumb3.jpg'],
            ['title' => 'Contoh Judul Berita 4', 'thumbnail' => $baseUrl . '/assets/recommendation/thumb4.jpg'],
        ]);
    }
}