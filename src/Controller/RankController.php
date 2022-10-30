<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RankController extends AbstractController
{
    /**
     * @Route("/rank", name="app_rank")
     */
    public function users(EntityManagerInterface $entityManager): Response
    {
        $users = $entityManager->getRepository(User::class);
        $userOrder = $users->findAll();
        return $this->render('rank/index.html.twig', [
            'users' => $userOrder
        ]);
    }
}
