<?php

namespace App\Controller;

use App\Entity\Game;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class WinLoseController extends AbstractController
{
    /**
     * @Route("/game/win", name="app_win")
     */
    public function win(EntityManagerInterface $entityManager): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $game = new Game();
        $date = new \DateTime();
        $game->setGameAt($date->format('Y-m-d'));
        $game->setUserId($user);
        $game->setResult(true);
        $entityManager->persist($game);
        $entityManager->flush();

        return $this->json(['property'=>'value'],200);
    }
    /**
     * @Route("/game/lose", name="app_lose")
     */
    public function lose(EntityManagerInterface $entityManager): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $game = new Game();
        $date = new \DateTime();
        $game->setGameAt( $date->format('Y-m-d'));
        $game->setUserId($user);
        $game->setResult(false);
        $entityManager->persist($game);
        $entityManager->flush();

        return $this->json(['property'=>'value'],200);
    }
}
