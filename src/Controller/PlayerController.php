<?php

namespace App\Controller;

use App\Entity\Game;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PlayerController extends AbstractController
{
    /**
     * @Route("/player", name="app_player")
     */
    public function index(EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $games = $entityManager->getRepository(Game::class)->findByUser($user);
        return $this->render('player/index.html.twig', [
            'controller_name' => 'PlayerController',
            'games' => $games,
        ]);
    }
}
