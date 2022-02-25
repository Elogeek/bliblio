<?php

namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BookRepository::class)]
class Book {

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private ?string $name;

    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'books')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Category $category;

    #[ORM\Column(type: 'boolean')]
    private ?bool $available;

    #[ORM\ManyToOne(targetEntity: Reader::class, inversedBy: 'books')]
    private ?Reader $reader;

    #[ORM\Column(type: 'string', length: 100)]
    private ?string $author;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $shortDescription;

    /**
     * @return int|null
     */
    public function getId(): ?int {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): self {
        $this->name = $name;
        return $this;
    }

    /**
     * @return Category|null
     */
    public function getCategory(): ?Category {
        return $this->category;
    }

    /**
     * @param Category|null $category
     * @return $this
     */
    public function setCategory(?Category $category): self {
        $this->category = $category;
        return $this;
    }

    /**
     * @return bool|null
     */
    public function getAvailable(): ?bool {
        return $this->available;
    }

    /**
     * @param bool $available
     * @return $this
     */
    public function setAvailable(bool $available): self {
        $this->available = $available;
        return $this;
    }

    /**
     * @return Reader|null
     */
    public function getReader(): ?Reader {
        return $this->reader;
    }

    /**
     * @param mixed $reader
     */
    public function setReader(?Reader $reader): self {
        $this->reader = $reader;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getAuthor(): ?string {
        return $this->author;
    }

    /**
     * @param string $author
     * @return $this
     */
    public function setAuthor(string $author): self {
        $this->author = $author;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getShortDescription(): ?string {
        return $this->shortDescription;
    }

    /**
     * @param string|null $shortDescription
     * @return $this
     */
    public function setShortDescription(?string $shortDescription): self {
        $this->shortDescription = $shortDescription;
        return $this;
    }

}
