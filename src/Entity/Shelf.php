<?php

namespace App\Entity;

use App\Repository\ShelfRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShelfRepository::class)]
class Shelf {

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\OneToMany(mappedBy: 'Shelf', targetEntity: Category::class)]
    private $category;

    public function __construct() {
        $this->category = new ArrayCollection();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int {
        return $this->id;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection {
        return $this->category;
    }

    /**
     * @param Category $category
     * @return $this
     */
    public function addCategory(Category $category): self {
        if (!$this->category->contains($category)) {
            $this->category[] = $category;
            $category->setShelf($this);
        }

        return $this;
    }

    /**
     * @param Category $category
     * @return $this
     */
    public function removeCategory(Category $category): self {
        if ($this->category->removeElement($category)) {

            if ($category->getShelf() === $this) {
                $category->setShelf(null);
            }
        }

        return $this;
    }

}
